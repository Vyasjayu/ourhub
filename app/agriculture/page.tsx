"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const services = [
  {
    title: "Seeds",
    image: "/images/agriculture/seeds.jpg",
    description: "High-quality seeds for better crop production.",
  },
  {
    title: "Fertilizers",
    image: "/images/agriculture/fertilizer.jpg",
    description: "Organic & chemical fertilizers for healthy crops.",
  },
  {
    title: "Farm Equipment",
    image: "/images/agriculture/equipment.jpg",
    description: "Modern farming tools and machinery.",
  },
  {
    title: "Irrigation",
    image: "/images/agriculture/irrigation.jpg",
    description: "Smart irrigation systems for efficient farming.",
  },
  {
    title: "Crop Protection",
    image: "/images/agriculture/crop-protection.jpg",
    description: "Pesticides and crop care solutions.",
  },
  {
    title: "Organic Farming",
    image: "/images/agriculture/organic.jpg",
    description: "Natural farming products and services.",
  },
  {
    title: "Agriculture Experts",
    image: "/images/agriculture/expert.jpg",
    description: "Consult with experienced agriculture experts.",
  },
  {
    title: "Livestock",
    image: "/images/agriculture/livestock.jpg",
    description: "Animal care, feed and livestock services.",
  },
];

export default function AgriculturePage() {
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
            <h1 className="text-xl font-bold">Agriculture</h1>
            <p className="text-xs text-gray-400">
              Smart Farming Solutions
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-md px-4 py-6">
        {/* Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-green-600 to-emerald-700 p-5 text-white shadow-lg">
          <h2 className="text-2xl font-bold">
            Agriculture Services
          </h2>

          <p className="mt-2 text-sm">
            Seeds, fertilizers, farm equipment, irrigation systems,
            agriculture experts and many more farming services are
            coming soon on OurHub.
          </p>

          <span className="mt-4 inline-block rounded-full bg-white px-4 py-2 text-sm font-semibold text-green-700">
            🌱 Coming Soon
          </span>
        </div>

        {/* Services */}
        <h2 className="mt-8 mb-4 text-lg font-bold">
          Popular Agriculture Services
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

                <span className="mt-3 inline-block rounded-full bg-green-600 px-3 py-1 text-[11px] font-bold text-white">
                  Coming Soon
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose */}
        <div className="mt-8 rounded-2xl bg-slate-900 p-5">
          <h2 className="text-lg font-bold">
            Why Choose OurHub Agriculture?
          </h2>

          <ul className="mt-4 space-y-3 text-sm text-gray-300">
            <li>🌾 Trusted Agriculture Experts</li>
            <li>🚜 Modern Farming Equipment</li>
            <li>🌱 Quality Seeds & Fertilizers</li>
            <li>📦 Easy Delivery & Support</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-8 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-700 p-5 text-center">
          <h2 className="text-xl font-bold">
            More Agriculture Services Coming Soon
          </h2>

          <p className="mt-2 text-sm text-green-100">
            We are building a complete agriculture platform to help
            farmers with trusted products and expert guidance.
          </p>

          <button className="mt-5 w-full rounded-xl bg-white py-3 font-semibold text-green-700">
            Notify Me
          </button>
        </div>
      </div>
    </main>
  );
}