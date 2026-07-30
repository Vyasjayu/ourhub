"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";


const services = [
  {
    title: "Wedding Event",
    image: "/images/events/wedding.jpg",
    description: "Complete wedding planning and management services.",
    href: "/eventManagement/wedding-event",
  },
  {
    title: "Birthday Parties",
    image: "/images/events/birthday.jpg",
    description: "Memorable birthday celebrations for all ages.",
  },
  {
    title: "Corporate Events",
    image: "/images/events/corporate.jpg",
    description: "Professional corporate meetings and event management.",
  },
  {
    title: "Engagement Ceremony",
    image: "/images/events/engagement.jpg",
    description: "Beautiful engagement decorations and planning.",
  },
  {
    title: "Baby Shower",
    image: "/images/events/baby-shower.jpg",
    description: "Creative baby shower decorations and arrangements.",
  },
  {
    title: "Anniversary Celebration",
    image: "/images/events/anniversary.jpg",
    description: "Celebrate your special moments with premium decor.",
  },
  {
    title: "Decoration Services",
    image: "/images/events/decoration.jpg",
    description: "Balloon, floral, stage and theme decoration services.",
  },
  {
    title: "Catering Services",
    image: "/images/events/catering.jpg",
    description: "Delicious catering for weddings, parties and events.",
  },
];

export default function EventManagementPage() {
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
            <h1 className="text-xl font-bold">Event Management</h1>
            <p className="text-xs text-gray-400">
              Plan Every Celebration with Ease
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-md px-4 py-6">
        {/* Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-pink-600 to-purple-700 p-5 text-white shadow-lg">
          <h2 className="text-2xl font-bold">
            Event Management Services
          </h2>

          <p className="mt-2 text-sm">
            Wedding planning, birthday parties, corporate events,
            catering, decoration, photography and many more event
            services are coming soon on OurHub.
          </p>

          <span className="mt-4 inline-block rounded-full bg-white px-4 py-2 text-sm font-semibold text-purple-700">
            🎉 Coming Soon
          </span>
        </div>

        {/* Services */}
        <h2 className="mt-8 mb-4 text-lg font-bold">
          Popular Event Services
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

                <span className="mt-3 inline-block rounded-full bg-pink-600 px-3 py-1 text-[11px] font-bold text-white">
                  Coming Soon
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose */}
        <div className="mt-8 rounded-2xl bg-slate-900 p-5">
          <h2 className="text-lg font-bold">
            Why Choose OurHub Events?
          </h2>

          <ul className="mt-4 space-y-3 text-sm text-gray-300">
            <li>🎉 Professional Event Planners</li>
            <li>💐 Premium Decoration Services</li>
            <li>📸 Photography & Videography</li>
            <li>🍽️ Catering & Venue Support</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-8 rounded-2xl bg-gradient-to-r from-pink-600 to-purple-700 p-5 text-center">
          <h2 className="text-xl font-bold">
            More Event Services Coming Soon
          </h2>

          <p className="mt-2 text-sm text-pink-100">
            We are building a complete event management platform where
            you can book trusted planners, decorators, caterers,
            photographers and entertainers in one place.
          </p>

          <button className="mt-5 w-full rounded-xl bg-white py-3 font-semibold text-purple-700">
            Notify Me
          </button>
        </div>
      </div>
    </main>
  );
}