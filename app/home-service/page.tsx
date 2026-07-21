"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const services = [
  {
    title: "Electrician",
    image: "/images/home-services/electrician.jpg",
    description: "Electrical wiring, switches, fans & lights.",
  },
  {
    title: "Plumber",
    image: "/images/home-services/plumber.jpg",
    description: "Leakage, taps, pipelines & bathroom fittings.",
  },
  {
    title: "Carpenter",
    image: "/images/home-services/carpenter.jpg",
    description: "Furniture repair & custom wood work.",
  },
  {
    title: "Painter",
    image: "/images/home-services/painter.jpg",
    description: "Interior & exterior painting services.",
  },
  {
    title: "AC Repair",
    image: "/images/home-services/ac-repair.jpg",
    description: "AC installation & servicing.",
  },
  {
    title: "Home Cleaning",
    image: "/images/home-services/cleaning.jpg",
    description: "Professional deep cleaning solutions.",
  },
  {
    title: "Appliance Repair",
    image: "/images/home-services/appliance.jpg",
    description: "Fridge, TV & washing machine repair.",
  },
  {
    title: "Pest Control",
    image: "/images/home-services/pest-control.jpg",
    description: "Safe pest & termite control service.",
  },
];

export default function HomeServicePage() {
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
            <h1 className="text-xl font-bold">Home Services</h1>
            <p className="text-xs text-gray-400">
              Professional Services at Your Doorstep
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-md px-4 py-6">
        {/* Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 p-5 text-black shadow-lg">
          <h2 className="text-2xl font-bold">
            Home Services
          </h2>

          <p className="mt-2 text-sm">
            Verified electricians, plumbers, carpenters, painters, AC repair,
            cleaning and many more professional home services are coming soon.
          </p>

          <span className="mt-4 inline-block rounded-full bg-black px-4 py-2 text-sm font-semibold text-white">
            🚀 Coming Soon
          </span>
        </div>

        {/* Section Title */}
        <h2 className="mt-8 mb-4 text-lg font-bold">
          Popular Services
        </h2>

        {/* Services */}
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

                <span className="mt-3 inline-block rounded-full bg-yellow-400 px-3 py-1 text-[11px] font-bold text-black">
                  Coming Soon
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="mt-8 rounded-2xl bg-slate-900 p-5">
          <h2 className="text-lg font-bold">
            Why Choose OurHub?
          </h2>

          <ul className="mt-4 space-y-3 text-sm text-gray-300">
            <li>✅ Verified Professionals</li>
            <li>✅ Affordable Pricing</li>
            <li>✅ Fast Doorstep Service</li>
            <li>✅ Trusted Customer Support</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-8 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 p-5 text-center text-black">
          <h2 className="text-xl font-bold">
            More Services Coming Soon
          </h2>

          <p className="mt-2 text-sm">
            We are adding more verified professionals every day.
          </p>

          <button className="mt-5 w-full rounded-xl bg-black py-3 font-semibold text-white">
            Notify Me
          </button>
        </div>
      </div>
    </main>
  );
}